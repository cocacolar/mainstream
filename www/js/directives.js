angular.module('your_app_name.directives', [])

.directive('myTabs', function() {
	return {
		restrict: 'E',
		transclude: true,
		scope: {},
		controller: function($scope) {
			var tabs = $scope.tabs = [];

			$scope.select = function(tab) {
				angular.forEach(tabs, function(tab) {
					tab.selected = false;
				});
				tab.selected = true;
				$scope.$emit('my-tabs-changed', tab);
			};

			this.addTab = function(tab) {
				if (tabs.length === 0) {
					$scope.select(tab);
				}
				tabs.push(tab);
			};
		},
		templateUrl: 'views/common/my-tabs.html'
	};
})

.directive('myTab', function() {
	return {
		require: '^myTabs',
		restrict: 'E',
		transclude: true,
		scope: {
			title: '@'
		},
		link: function(scope, element, attrs, tabsCtrl) {
			tabsCtrl.addTab(scope);
		},
		templateUrl: 'views/common/my-tab.html'
	};
})

.directive('validPin', function($http) {
	return {
		require: 'ngModel',
		link: function(scope, ele, attrs, c) {
			scope.$watch(attrs.ngModel, function(pinValue) {
				// $http({
				// 	method: 'POST',
				// 	url: '/api/check/' + attrs.validPin,
				// 	data: {'pin': attrs.validPin}
				// }).success(function(data, status, headers, cfg) {
				// 	c.$setValidity('valid-pin', data.isValid);
				// }).error(function(data, status, headers, cfg) {
				// 	c.$setValidity('valid-pin', false);
				// });
				if(pinValue=="12345")
				{
					c.$setValidity('valid-pin', true);
				}
				else
				{
					c.$setValidity('valid-pin', false);
				}
			});
		}
	};
})


.directive('showHideContainer', function(){
	return {
		scope: {
		},
		controller: function($scope, $element, $attrs) {
			$scope.show = false;

			$scope.toggleType = function($event){
				$event.stopPropagation();
				$event.preventDefault();

				$scope.show = !$scope.show;

				// Emit event
				$scope.$broadcast("toggle-type", $scope.show);
			};
		},
		templateUrl: 'views/common/show-hide-password.html',
		restrict: 'A',
		replace: false,
		transclude: true
	};
})


.directive('showHideInput', function(){
	return {
		scope: {
		},
		link: function(scope, element, attrs) {
			// listen to event
			scope.$on("toggle-type", function(event, show){
				var password_input = element[0],
						input_type = password_input.getAttribute('type');

				if(!show)
				{
					password_input.setAttribute('type', 'password');
				}

				if(show)
				{
					password_input.setAttribute('type', 'text');
				}
			});
		},
		require: '^showHideContainer',
		restrict: 'A',
		replace: false,
		transclude: false
	};
})


.directive('biggerText', function($ionicGesture) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			$ionicGesture.on('touch', function(event){
				event.stopPropagation();
				event.preventDefault();

				var text_element = document.querySelector(attrs.biggerText),
						root_element = document.querySelector(".menu-content"),
						current_size_str = window.getComputedStyle(text_element, null).getPropertyValue('font-size'),
						current_size = parseFloat(current_size_str),
						new_size = Math.min((current_size+2), 24),
						new_size_str = new_size + 'px';

				root_element.classList.remove("post-size-"+current_size_str);
				root_element.classList.add("post-size-"+new_size_str);
			}, element);
		}
	};
})

.directive('smallerText', function($ionicGesture) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			$ionicGesture.on('touch', function(event){
				event.stopPropagation();
				event.preventDefault();

				var text_element = document.querySelector(attrs.smallerText),
				root_element = document.querySelector(".menu-content"),
				current_size_str = window.getComputedStyle(text_element, null).getPropertyValue('font-size'),
				current_size = parseFloat(current_size_str),
				new_size = Math.max((current_size-2), 12),
				new_size_str = new_size + 'px';

				root_element.classList.remove("post-size-"+current_size_str);
				root_element.classList.add("post-size-"+new_size_str);
			}, element);
		}
	};
})

.directive('ionicYoutubeVideo', function($timeout, $ionicPlatform, youtubeEmbedUtils) {
	return {
		restrict: 'E',
		scope: {
			videoId: '@'
		},
		controller: function($scope, $element, $attrs) {
			$scope.playerVars = {
				rel: 0,
				showinfo: 0
			};
			$ionicPlatform.on("pause", function(){
				var yt_ready = youtubeEmbedUtils.ready;
				if(yt_ready)
				{
					$scope.yt_video.stopVideo();
				}
		  });
		},
		templateUrl: 'views/common/ionic-youtube-video.html',
		replace: false
	};
})

.directive('postContent', function($timeout, _, $compile) {
	return {
		restrict: 'A',
		scope: {},
		link: function(scope, element, attrs) {
			/**
			 * JavaScript function to match (and return) the video Id
			 * of any valid Youtube Url, given as input string.
			 * @author: Stephan Schmitz <eyecatchup@gmail.com>
			 * @url: http://stackoverflow.com/a/10315969/624466
			 */
			//  Ver: https://regex101.com/r/tY9jN6/1
			function ytVidId(url) {
			  var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11,})(?:\S+)?$/gmi;
			  return (url.match(p)) ? RegExp.$1 : false;
			}

			$timeout(function(){
				var iframes = element.find('iframe');
				if(iframes.length > 0)
				{
					angular.forEach(iframes, function(i) {

						var iframe = angular.element(i),
								youtube_video_id = ((iframe.length > 0) && (!_.isUndefined(iframe[0].src))) ? ytVidId(iframe[0].src) : false;
						if(youtube_video_id !== false)
						{
							// Then it's a youtube video, compile our custom directive
							var ionic_yt_video = $compile("<ionic-youtube-video video-id='"+youtube_video_id+"'></ionic-youtube-video>")(scope);
        			iframe.parent().append(ionic_yt_video);
							iframe.remove();
						}
					});
				}
			}, 10);
		}
	};
})

//Use this directive to open external links using inAppBrowser cordova plugin
.directive('dynamicAnchorFix', function($ionicGesture, $timeout, $cordovaInAppBrowser) {
	return {
		scope: {},
		link: function(scope, element, attrs) {
			$timeout(function(){
				var anchors = element.find('a');
				if(anchors.length > 0)
				{
					angular.forEach(anchors, function(a) {

						var anchor = angular.element(a);

						anchor.bind('click', function (event) {
							event.preventDefault();
							event.stopPropagation();

							var href = event.currentTarget.href;
							var	options = {};

							//inAppBrowser see documentation here: http://ngcordova.com/docs/plugins/inAppBrowser/

							$cordovaInAppBrowser.open(href, '_blank', options)
								.then(function(e) {
									// success
								})
								.catch(function(e) {
									// error
								});
						});

					});
				}
			}, 10);
		},
		restrict: 'A',
		replace: false,
		transclude: false
	};
})


.directive('multiBg', function(_){
	return {
		scope: {
			multiBg: '=',
			interval: '=',
			helperClass: '@'
		},
		controller: function($scope, $element, $attrs) {
			$scope.loaded = false;
			var utils = this;

			this.animateBg = function(){
				// Think i have to use apply because this function is not called from this controller ($scope)
				$scope.$apply(function () {
					$scope.loaded = true;
					$element.css({'background-image': 'url(' + $scope.bg_img + ')'});
				});
			};

			this.setBackground = function(bg) {
				$scope.bg_img = bg;
			};

			if(!_.isUndefined($scope.multiBg))
			{
				if(_.isArray($scope.multiBg) && ($scope.multiBg.length > 1) && !_.isUndefined($scope.interval) && _.isNumber($scope.interval))
				{
					// Then we need to loop through the bg images
					utils.setBackground($scope.multiBg[0]);
				}
				else
				{
					// Then just set the multiBg image as background image
					utils.setBackground($scope.multiBg[0]);
				}
			}
		},
		templateUrl: 'views/common/multi-bg.html',
		restrict: 'A',
		replace: true,
		transclude: true
	};
})


.directive('bg', function() {
	return {
		restrict: 'A',
		require: '^multiBg',
		scope: {
			ngSrc: '@'
		},
		link: function(scope, element, attr, multiBgController) {
			element.on('load', function() {
				multiBgController.animateBg();
		  });
		}
	};
})

.directive('preImg', function() {
	return {
		restrict: 'E',
		transclude: true,
		scope: {
			ratio:'@',
			helperClass: '@'
		},
		controller: function($scope) {
			$scope.loaded = false;

			this.hideSpinner = function(){
				// Think i have to use apply because this function is not called from this controller ($scope)
				$scope.$apply(function () {
					$scope.loaded = true;
				});
			};
		},
		templateUrl: 'views/common/pre-img.html'
	};
})

.directive('spinnerOnLoad', function() {
	return {
		restrict: 'A',
		require: '^preImg',
		scope: {
			ngSrc: '@'
		},
		link: function(scope, element, attr, preImgController) {
			element.on('load', function() {
				preImgController.hideSpinner();
		  });
		}
	};
})



  .directive('ionPullUpFooter', ['$timeout', '$rootScope', '$window', '$ionicPlatform', function($timeout, $rootScope, $window, $ionicPlatform) {
      return {
          restrict: 'AE',
          scope: {
              onExpand: '&',
              onCollapse: '&',
              onMinimize: '&'
          },
          controller: ['$scope', '$element', '$attrs', 'ionPullUpFooterState', 'ionPullUpFooterBehavior', function($scope, $element, $attrs, FooterState, FooterBehavior) {
              var
                tabs, hasBottomTabs, header, tabsHeight, headerHeight, handleHeight = 0,
                footer = {
                    height: 0,
                    posY: 0,
                    lastPosY: 0,
                    state: FooterState.COLLAPSED,
//                    defaultHeight : $element[0].offsetHeight,
                    defaultHeight : 30,
                    maxHeight: 115,
                    initialState: $attrs.initialState ? $attrs.initialState.toUpperCase() : FooterState.COLLAPSED,
                    defaultBehavior: $attrs.defaultBehavior ? $attrs.defaultBehavior.toUpperCase() : FooterBehavior.EXPAND
                };

              function init() {
                  computeDefaultHeights();

                  $element.css({'transition': '300ms ease-in-out', 'padding': 0});
                  if (tabs && hasBottomTabs) {
                      $element.css('bottom', tabs.offsetHeight + 'px');
                  }
              }

              function computeDefaultHeights() {
                  tabs = document.querySelector('.tabs');
                  hasBottomTabs = document.querySelector('.tabs-bottom');
                  header = document.querySelector('.bar-header');
                  tabsHeight = tabs ? tabs.offsetHeight : 0;
                  headerHeight = header ? header.offsetHeight : 0;
              }

              function computeHeights() {
                  footer.height = footer.maxHeight > 0 ? footer.maxHeight : $window.innerHeight - headerHeight - handleHeight - tabsHeight;
                  $element.css({'height': footer.height + 'px'});

                  if (footer.initialState == FooterState.MINIMIZED) {
                      minimize();
                  }  else {
                      collapse();
                  }
              }

              function updateUI() {
                  $timeout(function() {
                      computeHeights();
                  }, 300);
              }

              function recomputeAllHeights() {
                  computeDefaultHeights();
                  footer.height = footer.maxHeight > 0 ? footer.maxHeight : $window.innerHeight - headerHeight - handleHeight - tabsHeight;
                }

              function expand() {
                  // recompute height right here to make sure we have the latest
                  recomputeAllHeights();
                  footer.lastPosY = 0;
                  // adjust CSS values with new heights in case they changed
                  $element.css({'height':footer.height + 'px',  '-webkit-transform': 'translate3d(0, 0, 0)', 'transform': 'translate3d(0, 0, 0)'});
                  $scope.onExpand();
                  footer.state = FooterState.EXPANDED;
              }

              function collapse() {
                  footer.lastPosY = (tabs && hasBottomTabs) ? footer.height - tabsHeight : footer.height - footer.defaultHeight;
                  $element.css({'-webkit-transform': 'translate3d(0, ' + footer.lastPosY  + 'px, 0)', 'transform': 'translate3d(0, ' + footer.lastPosY  + 'px, 0)'});
                  $scope.onCollapse();
                  footer.state = FooterState.COLLAPSED
              }

              function minimize() {
                  footer.lastPosY = footer.height;
                  $element.css({'-webkit-transform': 'translate3d(0, ' + footer.lastPosY  + 'px, 0)', 'transform': 'translate3d(0, ' + footer.lastPosY  + 'px, 0)'});
                  $scope.onMinimize();
                  footer.state = FooterState.MINIMIZED;
              }


              this.setHandleHeight = function(height) {
                  handleHeight = height;
                  computeHeights();
              };

              this.getHeight = function() {
                  return $element[0].offsetHeight;
              };

              this.getBackground = function() {
                return $window.getComputedStyle($element[0]).background;
              };

              this.onTap = function(e) {
                  e.gesture.srcEvent.preventDefault();
                  e.gesture.preventDefault();

                  if (footer.state == FooterState.COLLAPSED) {
                      if (footer.defaultBehavior == FooterBehavior.HIDE) {
                          minimize();
                      } else {
                          expand();
                      }
                  } else {
                      if (footer.state == FooterState.MINIMIZED) {
                          if (footer.defaultBehavior == FooterBehavior.HIDE)
                              collapse();
                          else
                              expand();
                      } else {
                          // footer is expanded
                          footer.initialState == FooterState.MINIMIZED ? minimize() : collapse();
                      }
                  }

                  $rootScope.$broadcast('ionPullUp:tap', footer.state);
              };

              this.onDrag = function(e) {
                  e.gesture.srcEvent.preventDefault();
                  e.gesture.preventDefault();

                  switch (e.type) {
                      case 'dragstart':
                          $element.css('transition', 'none');
                          break;
                      case 'drag':
                          footer.posY = Math.round(e.gesture.deltaY) + footer.lastPosY;
                          if (footer.posY < 0 || footer.posY > footer.height) return;
                          $element.css({'-webkit-transform': 'translate3d(0, ' + footer.posY + 'px, 0)', 'transform': 'translate3d(0, ' + footer.posY + 'px, 0)','background':'background:rgba(255,255,255,.5)'});
                          break;
                      case 'dragend':
                          $element.css({'transition': '300ms ease-in-out'});
                          footer.lastPosY = footer.posY;
                          break;
                  }
              };

              init();

              $ionicPlatform.ready(function() {
                  $window.addEventListener('orientationchange', updateUI);
                  $ionicPlatform.on("resume", updateUI);
              });

          }],
          compile: function(element, attrs) {
              attrs.defaultHeight && element.css('height', parseInt(attrs.defaultHeight, 10) + 'px');
              element.addClass('bar bar-footer');
          }
      }
  }])
  .directive('ionPullUpContent', [function() {
      return {
          restrict: 'AE',
          require: '^ionPullUpFooter',
          link: function (scope, element, attrs, controller) {
              var
                footerHeight = controller.getHeight();
              element.css({'display': 'block', 'margin-top': footerHeight + 'px', width: '100%'});
              // add scrolling if needed
              if (attrs.scroll && attrs.scroll.toUpperCase() == 'TRUE') {
                  element.css({'overflow-y': 'scroll', 'overflow-x': 'hidden'});
              }
          }
      }
  }])
  .directive('ionPullUpBar', [function() {
      return {
          restrict: 'AE',
          require: '^ionPullUpFooter',
          link: function (scope, element, attrs, controller) {
              var
                footerHeight = controller.getHeight();
              element.css({'display': 'flex', 'height': footerHeight + 'px', position: 'absolute', right: '0', left: '0'});

          }
      }
  }])
  .directive('ionPullUpTrigger', ['$ionicGesture', function($ionicGesture) {
      return {
          restrict: 'AE',
          require: '^ionPullUpFooter',
          link: function (scope, element, attrs, controller) {
              // add gesture
              $ionicGesture.on('tap', controller.onTap, element);
              $ionicGesture.on('drag dragstart dragend', controller.onDrag, element);
          }
      }
  }])
  .directive('ionPullUpHandle', ['$ionicGesture', '$ionicPlatform', '$timeout', '$window',  function($ionicGesture, $ionicPlatform, $timeout, $window) {
      return {
          restrict: 'AE',
          require: '^ionPullUpFooter',
          link: function (scope, element, attrs, controller) {
              var height = parseInt(attrs.height,10) || 25, width = parseInt(attrs.width, 10) || 100,
                background =  controller.getBackground(),
                toggleClasses = attrs.toggle;

              controller.setHandleHeight(height);

              element.css({
                  display: 'block',
                  background: background,
                  position: 'absolute',
                  top: 1-height + 'px',
                  left: (($window.innerWidth - width) / 2) + 'px',
                  height: height + 'px',
                  width: width + 'px',
                  'text-align': 'center'
                  });

              // add gesture
              $ionicGesture.on('tap', controller.onTap, element);
              $ionicGesture.on('drag dragstart dragend', controller.onDrag, element);

              scope.$on('ionPullUp:tap', function() {
                  element.find('i').toggleClass(toggleClasses);
              });

              function updateUI() {
                  $timeout(function() {
                      element.css('left', (($window.innerWidth - width) / 2) + 'px');
                  }, 300);
              }

              $ionicPlatform.ready(function() {
                  $window.addEventListener('orientationchange', updateUI);
                  $ionicPlatform.on("resume", updateUI);
              });
          }
      }
  }])


;

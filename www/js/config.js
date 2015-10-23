angular.module('your_app_name.config', [])
.constant('WORDPRESS_API_URL', 'http://wordpress.startapplabs.com/blog/api/')
.constant('GCM_SENDER_ID', '574597432927')
.constant('ionPullUpFooterState', {
  COLLAPSED: 'COLLAPSED',
  MINIMIZED: 'MINIMIZED',
  EXPANDED: 'EXPANDED'
})
.constant('ionPullUpFooterBehavior', {
  HIDE: 'HIDE',
  EXPAND: 'EXPAND'
})

;

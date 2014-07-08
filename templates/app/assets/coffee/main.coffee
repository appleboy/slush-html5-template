# Filename: main.js<% if (includeRequireJS) { %>
require.config
  paths:
    jquery: '../vendor/jquery/dist/jquery'<% if (includeModernizr) { %>
    modernizr: '../vendor/modernizr/modernizr'<% } %>
  # for development
  urlArgs: (new Date()).getTime()

# initail app
require ['app'], (App) ->
  App.initialize()<% } %>

# if you're not used to coffeescript please paste this code into http://js2coffee.org

@logRenders = ->
  _.each Template, (template, name) ->
    oldRender = template.rendered
    counter = 0
    template.rendered = ->
      console.log name, "render count: ", ++counter, new Date().toString()[15..24]
      oldRender and oldRender.apply(this, arguments)

Session.set('sortBy', 'name')
Session.set('numberOfIds', 1000) 
logRenders()

Template.result.helpers
  result: ->
    if data?.length > 0
      console.log "in result", new Date()
      column  = Session.get('sortBy')
      limit   = Session.get('numberOfIds')
      array    = data[...limit].slice()
      array.sort (a, b) ->
        (if a[column] < b[column] then -1 else 1)

  selected: -> 
    if Session.equals('sortBy', '_id') then 'sorted' else ''

Template.result.events
  "click th": (e, t) ->
    target = $(e.target).attr('id')
    Session.set('sortBy', target)
  "change select": (e, t) ->
    console.log value = +$('select').val()
    Session.set('numberOfIds', value)  

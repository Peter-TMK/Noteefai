# Noteefai

<div class="container-fluid container-fluid-custom pb-5 mb-5">
  <div class="row">
    <!-- Display number of search items found -->
    <p><%= searchResults.length %> result(s) found!</p>
    <% if(searchResults != '') { %> <% searchResults.forEach(function (note,
    index) { %>

    <a href="/dashboard/item/<%= note._id %>">
      <h4><%= note.title %></h4>
    </a>

    <% }) %> <% } else { %>
    <p>Sorry, Nothing found!</p>
    <% } %>

  </div>
</div>

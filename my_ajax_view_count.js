(function ($, Drupal, window, document, undefined) {

Drupal.behaviors.ajax_view_count = {
  attach: function(context, settings) {
    if (settings.page_nids && $('.ajax-view-count', context).length) {
      var data = {
        nids: settings.page_nids,
        js_module: 'my_ajax_view_count',
        js_callback: 'view_count',
      };

      $.ajax({
        method: 'POST',
        url: '/js',
        data: data,
        success: function(data){
          if(data.content) {
            $.each(data.content, function(index, value){
              $('.ajax-view-count[data-nid="' + index +'"]').html(value);
            });
          }
        },
      });
    }
  }
}

})(jQuery, Drupal, this, this.document);

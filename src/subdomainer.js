
/*
|--------------------------------------------------------------------------
| Subdomainer Source
| Author: @warrenhaskins
|--------------------------------------------------------------------------
*/

;(function ( $, window, document, undefined ) {
    
    var pluginName  = 'subdomainer',
        document    = window.document,
        defaults    = {
            url: '.yoursubdomain.com',
            placeholder: ''
        };

    function Plugin( element, options ) {
        this.$el     = $(element);

        this.options = $.extend( {}, defaults, options);

        this.$wrap  = this.$el.wrap('<div />')
            .parent()
            .addClass('subdomainer-wrap');

        this.label  = $('<label />')
            .addClass('sub-label')
            .attr('for', 'subdomainer')
            .appendTo(this.$wrap);

        this.hidden = $('<label />')
            .appendTo(this.label)
            .attr('for', 'subdomainer')
            .addClass('sub-hidden');

        this.url    = $('<label />')
            .appendTo(this.label)
            .attr('for', 'subdomainer')
            .addClass('sub-url')
            .text(this.options.url);

        this.state();

        this.init();
    }

    Plugin.prototype =  {
            init : function() {
                var that = this;

                this.hidden.text($.trim(that.$el.val()));

                this.$el.on('keyup keydown keypress change', function(e) {
                    setTimeout(function() {
                        that.hidden.text($.trim(that.$el.val()));
                    }, 0);
                });

                this.$el.on('blur', $.proxy(this.state, this))
            },

            state: function() {
                var placeholder = this.options.placeholder || this.$el.prop('placeholder') || '';

                if ( this.$el.val() === '' ) { 
                    this.$el.prop('placeholder', placeholder)
                    this.hidden.text(placeholder)
                }
            }
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
        });
    };

}(jQuery, window, document));


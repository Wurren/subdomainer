# Subdomainer

Subdomainer is jQuery plugin for adding subdomain support for text fields. This can come in handy when a user is selecting a vanity subdomain url for themselves.

## Get Started
Simply add the subdomainer plugin to your HTML along with CSS

```
$('.mytextfield').subdomainer({
	url: '.myawesomeapp.com', // this defaults to '.yoursubdomain.com'
	placeholder: 'usersubdomain' // this defaults to an empty string, or the elements placeholder attribute
});
```
There's an example demo in the source files you can use as reference kids!

## CSS
Subdomainer works by wrapping the input, relatively positioning the element and absolute positioning a label above - masking the vanity url being entered.

Subdomainer comes with basic CSS to get you started, but you can easily swap out your own.
ProgressBar
=========

ProgressBar is a highly customizable MooTools progress bar class that animates to the desired percentage and can be styled in any manner by CSS.

![Screenshot](http://davidwalsh.name/dw-content/progressbar.png)

How to Use
----------

ProgressBar can be initialized at any time but is generally initialized at the top of the document during the page's normal load.  There are no required arguments -- only options.

### HTML
	<div id="put-bar-here2"></div>
	
### Javascript
	var pb = new dwProgressBar({
		startPercentage: 10,
		speed:1000,
		boxClass: 'pb-box',
		percentageClass: 'pb-perc',
		displayClass: 'pb-text',
		displayText: true,
		step:15,
		onComplete: function() {
			alert('Done!');
		},
		onChange: function() {
			alert('Changed!');
		}
	});
	document.id(pb).inject($('put-bar-here2'));
	
### CSS
	.pb-box {
		width:300px;
		height:15px;
		background-color:white;
		border:2px solid black;
		border-radius:2px;
		position:relative;
	}
	.pb-perc {
		position:absolute;
		top:0;
		left:0;
		bottom:0;
		background-color:red;
		/* This elements width will be changed to show progress */
	}
	.pb-text {
		position:absolute;
		top:0;
		left:0;
		bottom:0;
		right:0;
		line-height:15px;
		height:10px;
		text-align:center;
	}

For specific usage and options, please read the documentation or visit [https://github.com/mcfedr/ProgressBar/blob/master/Docs/ProgressBar.md](https://github.com/mcfedr/ProgressBar/blob/master/Docs/ProgressBar.md)
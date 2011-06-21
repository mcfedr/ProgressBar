/*
---
description:     ProgressBar

authors:
  - David Walsh (http://davidwalsh.name)

license:
  - MIT-style license

requires:
  core/1.2.1:   '*'
  more/1.2.1:   'Fx.*'

provides:
  - ProgressBar
...
*/
var ProgressBar = new Class({

	//implements
	Implements: [Events, Options],

	//options
	options: {
		boxClass:'progress-bar-box-id',
		percentageClass:'progress-bar-percentage-id',
		displayClass:'progress-bar-display-id',
		startPercentage: 0,
		displayText: false,
		speed:10,
		step:10,
		allowMore: false/*,
		onComplete: $empty,
		onChange: $empty*/
	},

	//initialization
	initialize: function(options) {
		this.setOptions(options);
		document.id(this);
		this.morph = new Fx.Morph(this.perc, {
			duration: this.options.speed,
			link:'cancel',
			onComplete: function() {
				this.fireEvent('change',[this.to]);
				if(this.to >= 100) this.fireEvent('complete',[this.to]);
			}.bind(this)
		});
		
		this.set(this.options.startPercentage);
	},

	//creates the box and percentage elements
	toElement: function() {
		if(!this.element) {
			this.element = new Element('div', { 
				'class':this.options.boxClass 
			});
			this.perc = new Element('div', { 
				'class':this.options.percentageClass, 
				style:'width:0px;' 
			}).inject(this.element);

			if(this.options.displayText) { 
				this.text = new Element('div', { 
					'class':this.options.displayClass 
				}).inject(this.element);
			}	
		}
		return this.element;
	},

	//calculates width in pixels from percentage
	calculate: function(percentage) {
		return (this.element.getStyle('width').replace('px','') * (percentage / 100)).toInt();
	},

	//animates the change in percentage
	animate: function(go) {
		if(!this.options.allowMore && go > 100) go = 100;
		this.to = go.toInt();
		this.morph.start({
			width:this.calculate(go)
		});
		if(this.options.displayText) this.text.set('text', this.to + '%'); 
	},

	//sets the percentage from its current state to desired percentage
	set: function(to) {
		this.animate(to);
	},

	//steps a pre-determined percentage
	step: function() {
		this.set(this.to + this.options.step);
	}

});
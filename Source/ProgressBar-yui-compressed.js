/*
---
description:     ProgressBar

authors:
  - David Walsh (http://davidwalsh.name)
  - Fred Cox (http://www.fedr.co)

license:
  - MIT-style license

requires:
  core/1.2.1:   '*'
  more/1.2.1:   'Fx.*'

provides:
  - ProgressBar
...
*/
var ProgressBar=new Class({Implements:[Events,Options],options:{boxClass:"progress-bar-box-id",percentageClass:"progress-bar-percentage-id",displayClass:"progress-bar-display-id",startPercentage:0,displayText:false,speed:10,step:10,allowMore:false},initialize:function(a){this.setOptions(a);document.id(this);this.morph=new Fx.Morph(this.perc,{duration:this.options.speed,link:"cancel",onComplete:function(){this.fireEvent("change",[this.to]);if(this.to>=100){this.fireEvent("complete",[this.to])}}.bind(this)});this.set(this.options.startPercentage)},toElement:function(){if(!this.element){this.element=new Element("div",{"class":this.options.boxClass});this.perc=new Element("div",{"class":this.options.percentageClass,style:"width:0px;"}).inject(this.element);if(this.options.displayText){this.text=new Element("div",{"class":this.options.displayClass}).inject(this.element)}}return this.element},calculate:function(a){return(this.element.getStyle("width").replace("px","")*(a/100)).toInt()},animate:function(a){if(!this.options.allowMore&&a>100){a=100}this.to=a.toInt();this.morph.start({width:this.calculate(a)});if(this.options.displayText){this.text.set("text",this.to+"%")}},set:function(a){this.animate(a)},step:function(){this.set(this.to+this.options.step)}});
function linetest()
{

var width = 1024;
var height = 768;
var ctrl = d3.select("body").append("svg").attr("width", width).attr("height", height);
d3.csv("http://ntucsieb06.github.io/d3/MI_5MINS_HIST10510.csv", 
       
       function(data)
	{	
		var ln = data.length;
		console.log(data);
		var maxy = d3.max(data, function(d){return d.num; });
		var lines = d3.line().x(function(d,i) {return i*(width/ln)}).y(function(d){return height-d.num*(height/maxy)});
		ctrl.append("path").data([data]).attr("d", lines).attr("stroke", "red").attr("fill", "none");
	}

);
}


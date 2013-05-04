Ext.define('Conference.view.about.History', {
    extend: 'Ext.Panel',
    xtype: 'aboutHistory',

    config: {
        title:'About',
        styleHtmlContent:true,
        scrollable:true,
        cls:'aboutHistory',
        html:[
        	'<h2>History</h2>',
        	"<p>Since 2006, Conference has been the largest gathering of Rails developers in the world (and for most of that time, it's been the largest gathering of Rubyists, as well).</p>",
        	"<p>The 2013 edition is again presented by Ruby Central, and will run from April 29th - May 2nd in Portland, OR.Every year, Conference draws world-class developers and companies together to see the state of the art in Rails and web development, to learn about new products and tools, and for good, old-fashioned networking. </p>",
        	"<p>If you're looking to recruit or be recruited, stay on top of your game or learn the basics, building a team or showing what your team has built, Conference is the place to be.</p>"
        ].join("")
    }
});

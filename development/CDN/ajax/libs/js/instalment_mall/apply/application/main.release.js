/**
 * Statement: gehen zum Teufel.
 * 
 * Describe: The javascript boot file of application page ( ~/apply/index.html ).
 * 
 * Further changes, comments: ~
 * 
 * Docs: ~
 * 
 * Original Author: Tony ( Shen Weizhong ).
 * 
 * Version: 0.1.0
 * 
 * Creation Date: 2013.10.17 16:45 ( Doris ).
 * 
 * Last update: 2013.10.17 16:45 ( Doris ).
 * 
 * License: ~
 * 
 * Copyright: ~
 */

(function (window, document, requirejs, require) {
	
	'use strict';
	
	var boot = boot || {};
	
	boot.getAgent = function () {
		
		return navigator.userAgent.toLowerCase();
		
	};
	
	boot.isIE = function(userAgent) {
		
		var agent = userAgent || this.getAgent();
		
		return !!agent.match(/msie/i);
		
	};
	
	boot.isGteIE9 = function(userAgent) {
		
		var agent = userAgent || this.getAgent(),
			
			match = agent.match(/msie\D*([\.\d]*)/i),
			
			version = 0;
		
		if (match && match[1]) {
			
			version = match[1];
			
		}
		
		return version >= 9;
		
	};
	
	boot.req = function (jquery) {
		
		requirejs.config({
			
			baseUrl: '//resource.fenqimall.com/ajax/libs',
			
			enforceDefine: false,
			
			paths: {
				
				'jquery': jquery,
				
				'cdnjs': 'js'
				
			},
			
			waitSeconds: 60,
			
			map: {
				
				'*': {'jquery': 'cdnjs/jquery_private/jquery.private.min'},
				
				'cdnjs/jquery_private/jquery.private.min': {'jquery': 'jquery'}
				
			}
			
		});
		
		require([
			
			'cdnjs/modernizr_amd/modernizr.min',
			
			'jquery',
			
			'cdnjs/jquery_cookie/1.3.1/jquery.cookie.min',

			'cdnjs/jquery_overlaymodule/0.1.0/jquery.overlaymodule',

			'cdnjs/jquery_datepicker/0.1.0/jquery.datetimepicker',
			
			'cdnjs/gridder/0.1.0/gridder',
			
			'cdnjs/jquery_title_modify/title.modify'
		
		], function (modernizr, SJ, cookie, Doverlaymodule, datetimepicker, gridder, modifyTitle) {
			
			SJ(function ($) {
				
				$('#submitBtn').overlaymodule({confirmObj: 'confirmWrapper', formId: 'personalInfo'});

				$('.form_datetime').datepicker({format: 'yyyy-mm-dd'});



				/**
				 * Development dependency: grid system.
				 */
				
				gridder;
				
				
				
				/**
				 * Title modify component( Public ) test.
				 */
				
				modifyTitle();
				
			});
			
		});
		
	};
	
	boot.judgement = function (opts) {
		
		if (this.isIE()) {
			
			this.isGteIE9() ? this.req(opts.jq2x) : this.req(opts.jq1x);
			
		} else {
			
			this.req(opts.jq2x);
			
		}
		
	};
	
	/*             ___   ___
				 \  \  \  \
	   (___)   ___\__\__\__\__
	   (o o)   |  O O O O O O|
	  --\ /----+-------------+-------/
	  |  O                          /
	   \                           /
	~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ => moo__Steerage ...
	*/
	
	boot.judgement({
		
		jq1x: '//resource.fenqimall.com/ajax/libs/js/jquery/1.10.2/jquery.min',
		
		jq2x: '//resource.fenqimall.com/ajax/libs/js/jquery/2.0.3/jquery.min'
		
	});
		
}(window, document, requirejs, require));
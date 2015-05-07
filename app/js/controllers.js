var drSandhalClinicControllersModule = angular.module('drSandhalClinicControllersModule', ['ngSanitize']);

drSandhalClinicControllersModule.controller('homeController', ['$scope' , function ($scope) {
	$scope.diseases_list = [
	                       {
	                    	   "title" : "Stomach Problems",
	                       		"class" : "sticker-stomach",
	                       		"description" : "Almost all health problems start at stomach. If you keep your stomach happy, it will keep you happy in return. With the goodness of Ayurveda, get rid of <em>acidity</em> , <em>constipation</em>, <em>indigestion</em>, etc. that can cause bigger health issues, like <em>piles</em>, ulcers etc."
	                    	   
	                       },
	                       {
	                    	   "title" : "Skin Problems",
	                       		"class" : "pimples",
	                       		"description" : "Skin is the reflection of your personality. Keep it healthy. At Dr Sandhal's Health Clinic, we have successfully treated over one lakh patients for their Skin problems, like, allergies, <em>acne </em>or <em>pimples</em>, pigmentation etc., with the goodness of Ayurveda."
	                    	   
	                       },
	                       {
	                    	   "title" : "Male Female Issues",
	                    	   "class" : "male-female-issue",
	                       		"description" : "At Dr Sandhal's Health Clinic male and female issues are responded separately by male and lady doctors. Over 3 lakh happy patients have got rid of their problems, like <em>Premature Ejaculation</em>, <em>Erectile Dysfunction</em>, Weakness, Menstrual disorders, UTI, Leucorrhoea, etc. through appropriate medical advice based on the Ayurveda."
	                    	   
	                       },
	                       {
	                    	   "title" : "Hair Problems",
	                       		"class" : "hairloss",
	                       		"description" : "Treat your hair and scalp problems with the goodness of Ayurveda. Dr Sandhal's unique combination of natural herbs and oils has a proven track record of successful treatment of over 2 lakh cases If you are looking for 100% ethical Ayurveda solution for problems like, Dandruff, <em>Hairfall</em>, <em>Premature Greying,</em> <em>hair loss treatment </em> then Dr. Sandhal's Health Clinic is the right destination."
	                    	   
	                       },
	                       {
	                    	   "title" : "Physical Growth",
	                       		"class" : "physical-growth",
	                       		"description" : "A stagnated or short <em> height</em> as per your age can have tremendous effect on your self confidence. Human body grows tall until the age of around 25 years. But, if you notice that you or your loved ones are not gaining height normally, it is time to consult an Ayurvedic Doctor."
	                    	   
	                       },
	                       {
	                    	   "title" : "Fitness Issues",
	                       		"class" : "fat",
	                       		"description" : "You are at the right place for 100% ethical <em>Ayurveda</em> solutions for gain or loss of weight. To be fit and fine, one must have an adequate body weight as per his or her age. If people call you <em>too thin</em> or <em>fat</em>, you should try and gain or  regain a body weight that is appropriate for you. Achieve proper physical fitness through the goodness of Ayurveda."
	                    	   
	                       }
	];
	$scope.slider_first_image = {
			"path" : "carosal-stomach.png",
			 "alt" : "Stomach",
			 "title" : "Stomach problem"
			
	};
	
	$scope.slider_images = [

							{
								"path" : "slider-physique1.png",
								 "alt" : "Physique Problems",
								 "title" : "Physique Problems"
								
							},
							{
								"path" : "slider-sex.png",
								 "alt" : "Male Female Problems",
								 "title" : "Male Female Problems"
								
							},
							{
								"path" : "slider-skin.png",
								 "alt" : "Skin Problems",
								 "title" : "Skin Problems"
								
							},
							{
								"path" : "slider-hair.png",
								 "alt" : "Hair Loss Problems",
								 "title" : "Hair Loss Problems"
								
							}];
	
	
   }
]);
drSandhalClinicControllersModule.controller('commonController', function ($scope) {
        
   }
);
drSandhalClinicControllersModule.controller('popularTreatmentsController', function ($scope) {
        
   }
);
drSandhalClinicControllersModule.controller('NavigationController', ['$scope', '$location',
  function ($scope, $location) {
	$scope.isActive = function (viewLocation) {
		var active = (viewLocation == $location.path());
			return active;
	};
	}
]);


drSandhalClinicControllersModule.directive("btstAccordion", function () {
    return {
        restrict: "E",
        transclude: true,
        replace: true,
        scope: {},
        template:
            "<div class='accordion' ng-transclude></div>",
        link: function (scope, element, attrs) {

            // give this element a unique id
            var id = element.attr("id");
            if (!id) {
                id = "btst-acc" + scope.$id;
                element.attr("id", id);
            }

            // set data-parent on accordion-toggle elements
            var arr = element.find(".accordion-toggle");
            for (var i = 0; i < arr.length; i++) {
                $(arr[i]).attr("data-parent", "#" + id);
                $(arr[i]).attr("href", "#" + id + "collapse" + i);
            }
            arr = element.find(".accordion-body");
            $(arr[0]).addClass("in"); // expand first pane
            for (var i = 0; i < arr.length; i++) {
                $(arr[i]).attr("id", id + "collapse" + i);
            }
        },
        controller: function () {}
    };
}).
directive('btstPane', function () {
    return {
        require: "^btstAccordion",
        restrict: "E",
        transclude: true,
        replace: true,
        scope: {
            title: "@",
            category: "=",
            order: "="
        },
        template:
            "<div class='accordion-group' >" +
            "  <div class='accordion-heading'>" +
            "    <a class='accordion-toggle' data-toggle='collapse'> {{category.name}} - </a>" +
       
            "  </div>" +
            "<div class='accordion-body collapse'>" +
            "  <div class='accordion-inner' ng-transclude></div>" +
            "  </div>" +
            "</div>",
        link: function (scope, element, attrs) {
            scope.$watch("title", function () {
                // NOTE: this requires jQuery (jQLite won't do html)
                var hdr = element.find(".accordion-toggle");
                hdr.html(scope.title);
            });
        }
    };
})
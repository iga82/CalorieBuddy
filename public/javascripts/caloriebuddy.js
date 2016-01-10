// document ready
$(function(){

    $("#done").click(function(){
        event.preventDefault();

        // json object housing the nutrition info
        var nutritionInfo = null;

        // grab inputs
        var carbInput = $("#carb-input").val();
        var proteinInput = $("#protein-input").val();
        var fatInput = $("#fat-input").val();

        if(!carbInput || !proteinInput || !fatInput){
            $("#macro-info").hide();
            $("#macro-input").addClass("has-error");
        }
        else if(!isInteger(carbInput) || !isInteger(proteinInput) || !isInteger(fatInput)){
            $("#macro-info").hide();
            $("#macro-input").addClass("has-error");
        }
        else{
            // fill in nutrition info
            nutritionInfo = {};
            nutritionInfo.carbCalories = parseInt(carbInput) * 4;
            nutritionInfo.proteinCalories = parseInt(proteinInput) * 4;
            nutritionInfo.fatCalories = parseInt(fatInput) * 9;
        }

        // if nutrition info was set
        if(nutritionInfo){
            $("#macro-input").removeClass("has-error");
            var calorieTotal = 0;
            for (key in nutritionInfo){
                console.log(key);
                calorieTotal += nutritionInfo[key];
            }

            $("#carb-percentage").text("Carbs: " + Math.round((nutritionInfo.carbCalories / calorieTotal) * 100) + "%");
            $("#protein-percentage").text("Protein: " + Math.round((nutritionInfo.proteinCalories / calorieTotal) * 100) + "%");
            $("#fat-percentage").text("Fat: " + Math.round((nutritionInfo.fatCalories / calorieTotal) * 100) + "%");
            $("#macro-info").show();
        }
    });

    /* test if a string contains an integer */
    function isInteger (numStr){
        // test num string to see if integer
        return /^([0-9]\d*)$/.test(numStr);
    }

});
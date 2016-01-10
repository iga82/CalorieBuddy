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
            nutritionInfo.fatCalories = parseInt(fatInput) * 4;
        }

        if(nutritionInfo){
            $("#macro-input").removeClass("has-error");
            var carbCalories = $("#carb-input").val() * 4;
            var proteinCalories = $("#protein-input").val() * 4;
            var fatCalories = $("#fat-input").val() * 9;
            var calorieTotal = carbCalories + proteinCalories + fatCalories;

            $("#carb-percentage").text("Carbs: " + Math.round((carbCalories / calorieTotal) * 100) + "%");
            $("#protein-percentage").text("Protein: " + Math.round((proteinCalories / calorieTotal) * 100) + "%");
            $("#fat-percentage").text("Fat: " + Math.round((fatCalories / calorieTotal) * 100) + "%");
            $("#macro-info").show();
        }
    });

    function isInteger (numStr){
        // test num string to see if integer
        return /^([0-9]\d*)$/.test(numStr);
    }

});
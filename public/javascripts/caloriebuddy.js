// document ready
$(function(){

    $("#done").click(function(){
        event.preventDefault();
        var carbCalories = $("#carb-input").val() * 4;
        var proteinCalories = $("#protein-input").val() * 4;
        var fatCalories = $("#fat-input").val() * 9;
        var calorieTotal = carbCalories + proteinCalories + fatCalories;

        $("#carb-percentage").text("Carbs: " + Math.round((carbCalories / calorieTotal) * 100) + "%");
        $("#protein-percentage").text("Protein: " + Math.round((proteinCalories / calorieTotal) * 100) + "%");
        $("#fat-percentage").text("Fat: " + Math.round((fatCalories / calorieTotal) * 100) + "%");
        $("#macro-info").show();
    });
    
});
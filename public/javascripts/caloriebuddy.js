// document ready
$(function(){
    function getval(sel) {
      var parent_div = $(sel).parents(".select-text-parent");
      var child_text_input = $(parent_div).find(".input-group-addon");
      $(child_text_input).text(keyword_dictionary[sel.value].serving);
    }

    $(".add-new-item").click(function(){
        var selectHTML = "<div class='select-text-parent' style='padding-bottom: 5px;'>" +
                         "<div class='col-xs-2'>" +
                         "<select class='form-control select' onchange='getval(this);'></select>" +
                         "</div>"

        var textInputHTML = "<div class='col-xs-2 input-group'>" +
                        "<input type='text' class='form-control text-input' id='textInput" + textIndex + "'>" +
                        "<div class='input-group-addon'><span>grams</span></div>" +
                        "</div>" + 
                        "</div>"

        $('.item-select-div').append(selectHTML + textInputHTML);
        textIndex += 1;
        for(var key in keyword_dictionary){
            $('.select').append("<option>" + key + "</option>");
        }
    });

    $(".done").click(function(){
        var total = 0.0;
        // get an array of JSON Objects with the selected options
        var selected_items = $('.select').find(":selected").get();
        // index that loops through the different text boxes
        var loopThroughtTextIndex = 0;
        // loop through the array of selected items
        $.each(selected_items, function(index, value) {
            var textInputName = '#textInput' + loopThroughtTextIndex;
            // increase text input index
            loopThroughtTextIndex += 1;
            // get the value from the text input box and convert into an int
            var textInputField = parseFloat($(textInputName).val());
            if(isNaN(textInputField)){
                textInputField = 0;
            }
            // build up the total
            total += keyword_dictionary[$(value).val()].calories * textInputField;
        });
        $('.calorieTotal').html(total);
    });

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
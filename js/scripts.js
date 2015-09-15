function Contact(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];

}

Contact.prototype.fullName = function(){
  return this.firstName + " " + this.lastName;
}

function Address(type, street, city, state) {
  this.type = type;
  this.street = street;
  this.city = city;
  this.state = state;
}

Address.prototype.fullAddress = function() {
  return this.type + ", " + this.street + ", " + this.city + ", " + this.state;
}

function addAddressFields() {
  $("#new-addresses").append('<div class="new-address">' +
                              '<div class="form-group">' +
                                '<label for="new-type">Type</label>' +
                                '<input type="text" class="form-control new-type">' +
                              '</div>' +
                               '<div class="form-group">' +
                                 '<label for="new-street">Street</label>' +
                                 '<input type="text" class="form-control new-street">' +
                               '</div>' +
                               '<div class="form-group">' +
                                 '<label for="new-city">City</label>' +
                                 '<input type="text" class="form-control new-city">' +
                               '</div>' +
                               '<div class="form-group">' +
                                 '<label for="new-state">State</label>' +
                                 '<input type="text" class="form-control new-state">' +
                               '</div>' +
                             '</div>');
}

function resetFields() {
  $("input").val("");
  $("#new-addresses").empty();
  addAddressFields();
}


$(document).ready(function() {
  addAddressFields();

  $("#add-address").click(function() {
    addAddressFields();
  });


  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".new-address").each(function() {
      var inputtedType = $(this).find("input.new-type").val();
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();

      var newAddress = new Address(inputtedType, inputtedStreet, inputtedCity, inputtedState);
      newContact.addresses.push(newAddress);
    });


    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
      resetFields();



    $(".contact").last().hover(function() {
      $("#show-contact").fadeToggle(500);

      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);

      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
      });
    });
  });
});

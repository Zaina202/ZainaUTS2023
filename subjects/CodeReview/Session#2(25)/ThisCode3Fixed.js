const customerData = {
    custCode: "0000",
    custName: "Zaina",
    custAge: 20,
    custPhone: "123-456-7890",
    custMobile: "987-654-3210",
    custAddress: "Asira Al-shamalia",
    custEmail: "zainarabah2020@gmail.com",
    fax: "000-000-0000",
};

  function logCustomerInfo(customer) {
    // This function logs customer information

    try {
        console.log(customer);
    } catch (error) {
        console.error("Error logging customer information:", error.message);
    }
}
logCustomerInfo(customerData);

function MyFunction() {
    const zeadAge = 36;
	try {
        // Show an alert box with Zead's age
        alert("Zead Age is: " + zeadAge);
    } catch (error) {
        console.error("Error displaying Zead's age:", error.message);
    }
}
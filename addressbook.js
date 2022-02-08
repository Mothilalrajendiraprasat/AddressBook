
class addressbook{
    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phone = params[6];
        this.email = params[7];
    }
    get firstName() { return this._firstName; }
    set firstName(firstName) {
        let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        if (nameRegex.test(firstName))
            this._firstName = firstName;
        else
            throw "Invalid first Name";
    }

    get lastName() { return this._lastName; }
    set lastName(lastName) {
        let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        if (nameRegex.test(lastName))
            this._lastName = lastName;
        else
            throw "Invalid  last Name";
    
    }
    get address() { return this._address; }
    set address(address) {
        let addressRegex = RegExp("^[A-Za-z]{4,}$");
        if (addressRegex.test(address))
            this._address = address;
        else
            throw "Invalid address ";
    }


    get city() { return this._city; }
    set city(city) {
        let cityRegex = RegExp("^[A-Za-z]{4,}$");
        if (cityRegex.test(city))
            this._city = city;
        else
            throw "Invalid city ";
    }

    
    get state() { return this._state; }
    set state(state) {
        let stateRegex = RegExp("^[A-Za-z0-9]{4,}$");
        if (stateRegex.test(state))
            this._state = state;
        else
            throw "Invalid state";
    }

    get zip() { return this._zip; }
    set zip(zip) {
        let zipRegex = RegExp("^[0-9]{3}[ ]*[0-9]{3}$");
        if (zipRegex.test(zip))
            this._zip = zip;
        else
            throw "Invalid zip ";
            this._zip = zip;
    }

    get phone() { return this._phone; }
    set phone(phone) {
        let phoneRegex = RegExp("^[1-9]{2}[ ]{1}[0-9]{10}$");
        if (phoneRegex.test(phone))
            this._phone = phone;
        else
            throw "Invalid phone number";
    }

    get email() { return this._email; }
    set email(email) {
        let emailRegex = RegExp("^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$");
        if (emailRegex.test(email))
            this._email = email;
        else
            throw "Invalid email";
    }

    toString() {
        return "\nName: " + this.firstName + " " + this.lastName +
            "\nAddress: " + this.address +
            "\nCity: " + this.city +
            "\nState: " + this.state +
            "\nZip: " + this.zip +
            "\nPhone Number: " + this.phone +
            "\nEmail: " + this.email;
    }
}
let contactarray = new Array();

contactarray.push(new addressbook("Raghu","Kumar","sarasvatinagar","vellore","Tamilndu",123456,"91 9944556678","Raghu@gmail.com"));
contactarray.push(new addressbook("Mothilal","Prasath","gandhinagar","ranipet","karnataka",123456,"11 1111111111","Raghu@gmail.com"));
contactarray.push(new addressbook("Hardhik","Pandhya","guntur","vellore","karnataka",123456,"11 1111111111","Raghu@gmail.com"));
contactarray.push(new addressbook("Adam","Gilchrist","nethajinagar","ranipet","andhrapradesh",123456,"11 1111111111","Raghu@gmail.com"));

console.log(contactarray);
contactarray.forEach((contactarray) => console.log(contactarray.toString()));
//UC4 edit specific contact 
console.log("\n searching a specific data use name and update the addressbook");
var indexx = contactarray.findIndex(addressbook => addressbook.firstName == "Raghu");
console.log("contact found"+indexx);
contactarray[indexx].zip = 632501;
console.log("Updated contact");
contactarray.forEach((contactarray) => console.log(contactarray.toString()));

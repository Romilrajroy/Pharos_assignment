// JavaScript source
const mongoose = require("mongoose");

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost:27017/categoriesDB');

const electronicsSchema = new mongoose.Schema({
    name: String,
    Type: String,
    Description: String,
    Status: Boolean,

});


    const Electronic = mongoose.model("electronic", electronicsSchema);

    const telivision = new Electronic({
        name: "telivision",
        Type: "electronics",
        Description: "Loreim Ipsum",
        status: true,

    });
    //telivision.save()

    const smartphone = new Electronic({
        name: "SmartPhone",
        Type: "electronics",
        Description: "Loreim Ipsum",
        status: true,

    });
    //smartphone.save()

    const Trimmer = new Electronic({
        name: "Trimmer",
        Type: "electronics",
        Description: "Loreim Ipsum",
        status: true,

    });
    //Trimmer.save()
    const PC = new Electronic({
        name: "PC",
        Type: "electronics",
        Description: "Loreim Ipsum",
        status: true,

    });
   // PC.save()
    const Laptops = new Electronic({
        name: "PC",
        Type: "electronics",
        Description: "Loreim Ipsum",
        status: true,

    });
    //Laptops.save()
    const Accessories = new Electronic({
        name: "PC",
        Type: "electronics",
        Description: "Loreim Ipsum",
        status: true,

    });
   // Accessories.save()


    const grocerySchema = new mongoose.Schema({
        name: String,
        Type: String,
        Description: String,
        status: Boolean,

    });

    const Grocery = mongoose.model("Grocery", grocerySchema);

    const Salt = new Grocery({
        name: "Salt",
        Type: "Grocery",
        Description: "Loreim Ipsum",
        status: true,

    });
    //Salt.save()

    const Almonds = new Grocery({
        name: "Almonds",
        Type: "Dry Fruit",
        Description: "Loreim Ipsum",
        status: true,

    });
   //Almonds.save()

    const Honey = new Grocery({
        name: "honey",
        Type: "Grocery",
        Description: "Loreim Ipsum",
        status: true,

    });
   // Honey.save()
    const soap = new Grocery({
        name: "soap",
        Type: "Grocery",
        Description: "Loreim Ipsum",
        status: true,

    });
   // soap.save()
    const Bread = new Grocery({
        name: "Bread",
        Type: "Grocery",
        Description: "Loreim Ipsum",
        status: true,

    });
   // Bread.save()
    const Oil = new Grocery({
        name: "Oil",
        Type: "Grocery",
        Description: "Loreim Ipsum",
        status: true,

    });
    //Oil.save()

const DrugsSchema = new mongoose.Schema({
    name: String,
    Type: String,
    Description: String,
    status: Boolean,

});

const Drugs = mongoose.model("Drug", grocerySchema);

const drug1 = new Drug({
    name: "drug1",
    Type: "Drug",
    Description: "Loreim Ipsum",
    status: true,

});
//drug1.save()

const drug2 = new Drug({
    name: "drug2",
    Type: "Drug",
    Description: "Loreim Ipsum",
    status: true,

});
//drug2.save()

const drug3 = new Drug({
    name: "drug3",
    Type: "Drug",
    Description: "Loreim Ipsum",
    status: true,

});
//drug3.save()

const drug4 = new Drug({
    name: "drug4",
    Type: "Drug",
    Description: "Loreim Ipsum",
    status: true,

});
//drug4.save()

const drug5 = new Drug({
    name: "drug5",
    Type: "Drug",
    Description: "Loreim Ipsum",
    status: true,

});
drug5.save()






/*const productsSchema = new mongoose.Schema({
    Name: String,
    Category: String,
    Description: String,
    Price: Number,
    OfferPrice: Number,

});*/
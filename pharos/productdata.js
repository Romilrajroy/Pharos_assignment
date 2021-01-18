// JavaScript source code
const mongoose = require("mongoose");

mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect('mongodb://localhost:27017/productsDB');

const smartPhoneSchema = new mongoose.Schema({
    name: String,
    category: String,
    description: String,
    Price: Number,
    OfferPrice: Number,
});

const smartPhone = mongoose.model("SmartPhone", smartPhoneSchema);

const IphoneX = new SmartPhone({
    name: "IphoneX",
    category: "Electronics",
    description: "Loreim Ipsum",
    Price: 70000,
    OfferPrice: 57000,

});
IphoneX.save()

const IphoneX = new SmartPhone({
    name: "IphoneX",
    category: "smartphone",
    description: "Loreim Ipsum",
    Price: 70000,
    OfferPrice: 57000,

});
IphoneX.save()

const S10 = new SmartPhone({
    name: "Galaxy S10",
    category: "smartphone",
    description: "Loreim Ipsum",
    Price: 70000,
    OfferPrice: 57000,

});
IphoneX.save()

const Pixel5 = new SmartPhone({
    name: "Pixel5",
    category: "smartphone",
    description: "Loreim Ipsum",
    Price: 70000,
    OfferPrice: 57000,

});
Pixel5.save()

const Nexus = new SmartPhone({
    name: "Nexus",
    category: "Smartphone",
    description: "Loreim Ipsum",
    Price: 70000,
    OfferPrice: 57000,

});
IphoneX.save()
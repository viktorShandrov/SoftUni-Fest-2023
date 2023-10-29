
const utils = require("../utils/utils")
const OfferModel = require("../models/offersModel")
const userModel = require("../models/userModel");


exports.createOffer = async(name,description,price,ownerId,type)=>{

    return  OfferModel.create({name,description,price,ownerId,type})

}
exports.getOffer = async(offerId)=>{
    return OfferModel.findById(offerId).populate("ownerId")
}

exports.editOffer = async(id,name,description,price)=>{

    const offer  = await OfferModel.findById(id)
    offer.name = name
    offer.description = description
    offer.price = price

    return offer.save()
}
exports.deleteOffer = async(id,userId)=>{
    const offer  = await OfferModel.findById(id)
    const user = await userModel.findById(userId)

    if(!offer.ownerId.equals(userId)){
        throw new Error("You are not the owner")
    }



    return OfferModel.findByIdAndDelete(id)
}


exports.addOfferToPurchasedOffers=async(userId,offerID)=>{
    const offer = await OfferModel.findById(offerID)
    offer.purchasedBy.push(userId)
    return offer.save()
}
exports.searchBusinessman = async(searchParam)=>{

    return userModel.find({
        companyName: { $regex: searchParam, $options: "i" }
    });


}
exports.getTopOfferCategories = async()=>{

    const offers = await OfferModel.find()
    const tierList= {}

    for (const offer of offers) {
        if(tierList.hasOwnProperty(offer.type)){
            tierList[offer.type]+=1
        }else{
            tierList[offer.type]=1
        }
    }

    const sorted = Object.entries(tierList).sort((a,b)=>b[1]-a[1])
    return [sorted[0],sorted[1],sorted[2]]




}
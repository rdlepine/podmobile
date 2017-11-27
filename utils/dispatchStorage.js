import { AsyncStorage } from 'react-native'
export const DISPATCH_STORAGE_KEY = 'podDispath:dispatches'
export const STATUS_STORAGE_KEY = 'podDispath:status'
export function setLastQuizCompleteTime(dt) {
    let lastQuizTime = {
        lastQuiz: {
            time: dt
        }
    }
    return AsyncStorage.mergeItem(STATUS_STORAGE_KEY, JSON.stringify(lastQuizTime));
}

export function getQuizStatus() {
    return AsyncStorage.getItem(STATUS_STORAGE_KEY)
    .then( (status) => {
         if(status) {
             return JSON.parse(status);
        }
        return "{}";
    }).catch( (err) => {
        console.log("ERR1",err);
    });
}

export function submitEntry(deck) {
     return AsyncStorage.mergeItem(DISPATCH_STORAGE_KEY, JSON.stringify(deck));
}

export function addDeck(deck) {
    let newDeck = {
       [deck]: deck
    }

    return AsyncStorage.setItem(DISPATCH_STORAGE_KEY, JSON.stringify(newDeck));
}

export function getDecks() {
    return AsyncStorage.getItem(DISPATCH_STORAGE_KEY)
        .then( (decks) => {
             if(decks) {
                 return decks;
            }
            return "{}";
        }).catch( (err) => {
            console.log("ERR1",err);
        });
}

export function clearDecks(key) { 
    return AsyncStorage.removeItem(key)
        .then( () => {
             return {};
        }).catch( (err) => {
            console.log(err);
        });
}

export function getCard(key) {
     return AsyncStorage.getItem(DISPATCH_STORAGE_KEY)
        .then( (card) => {
            if(card) {
                let cardData = JSON.parse(card);
                letCardDetails = cardData[key];
                let obj = {
                    [key]: letCardDetails
                };
                return obj;
            }
            return "{}";
        }).catch( (err) => {
            console.log("ERR2",err);
    });
}
 
export function addQuestion(key, question) {
    return AsyncStorage.getItem(DISPATCH_STORAGE_KEY)
       .then( (cards) => {
           if(cards) {
               let cardData = JSON.parse(cards);
               let cardDetails = cardData[key];
               if(cardDetails === undefined || cardDetails.questions === undefined) {
                   cardDetails.questions = [];
               }
               cardDetails.questions.push(question);
               let obj = {
                   [key]: cardDetails
               };
               return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(obj));
              
             }
           return "{}";
       }).catch( (err) => {
           console.log("ERR3",err);
   });
}
 
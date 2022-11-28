import {test} from '@jest/globals'
import AES from './src/index.js'
const aes = new AES('THIS_IS_MY_PRIVATE_KEY')
let encrypted
// let encrypted_arab
// let encrypted_chinese
// let arab_string = 'اربك تكست هو اول موقع يسمح لزواره الكرام بتحويل الكتابة العربي الى كتابة مفهومة من قبل اغلب برامج التصميم مثل الفوتوشوب و الافترايفكتس و البريمير و الافد ميدا كومبوزر و السموك و برامج اخرى كثيرة'
// let chinese_string = '首映鼓掌10分鐘 評語指不及《花樣年華》 該片在柏林首映，完場後獲全場鼓掌10分鐘。王家衛特別為該片剪輯「柏林版本 增減20處 趙本山香港戲分被刪 在柏林影展放映的《一代宗師》版本 教李小龍武功 葉問決戰散打王'
test('encrypt',()=>{
    encrypted = aes.Encrypt("ENCRYPTED TEXT")
    console.log(encrypted)
})
test('decrypt',()=>{
    console.log(aes.Decrypt(encrypted))
})
// test('encrypt arab',()=>{
//     encrypted_arab = aes.Encrypt(arab_string)
//     console.log(encrypted_arab)
// })
// test('decrypt arab',()=>{
//     const decrypted = aes.Decrypt(encrypted_arab)    
//     console.log(decrypted)
//     console.log(decrypted === arab_string)
// })
// test('encrypt chinese',()=>{
//     encrypted_chinese = aes.Encrypt(chinese_string)
//     console.log(encrypted_chinese)
// })
// test('decrypt arab',()=>{
//     const decrypted = aes.Decrypt(encrypted_chinese)    
//     console.log(decrypted)
//     console.log(decrypted === chinese_string)
// })
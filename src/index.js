import crypto from 'crypto'
import '@vincvn/bp-helper'
export default class AES256 {
    $CIPHER_ALGORITHM = "aes-256-cbc"
    constructor(private_key){
        const isString = typeof private_key === 'string'
        const isBytes = typeof private_key === 'object'
        if(!isBytes && !isString) throw new TypeError("INVALID PRIVATE_KEY")
        if(Buffer.byteLength(private_key) !== 32){
            this.$key = crypto.createHash('sha256').update(private_key).digest()
        }else{
            this.$key = Buffer.from(private_key)
        }
    }
    $cipher(iv){
        return crypto.createCipheriv(
            this.$CIPHER_ALGORITHM, this.$key, iv)
    }
    $decipher(iv){
        return crypto.createDecipheriv(
            this.$CIPHER_ALGORITHM, this.$key, iv)
    }
    getKey(){
        return Uint8Array.from(Buffer.from(private_key))
    }
    Encrypt(data){
        const iv = Buffer.from(crypto.randomBytes(16))
        const cipher = this.$cipher(iv)
        let encrypted = cipher.update(data)
        encrypted = Buffer.concat([iv, encrypted, cipher.final()])
        return encrypted.toString('hex')
    }
    Decrypt(data){
        const iv = Buffer.from(data.getFrom(32),'hex')
        const decipher = this.$decipher(iv)
        const encryptedText = data.slice(32)
        let decrypted = decipher.update(Buffer.from(encryptedText,'hex'))
        decrypted = Buffer.concat([decrypted, decipher.final()]);
        return decrypted.toString('utf-8');
    }
}
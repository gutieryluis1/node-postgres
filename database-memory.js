import { randomUUID } from "node:crypto"

export class DatabaseMemory {   
    #videos = new Map()

    // Set (é um tipo de array no JS que não aceita trabalhar com itens duplicados)
    //Map (objeto no JS com particularidades)

    list(search) {
        return Array.from(this.#videos.entries()).map((videoArray)=>{
            const id = videoArray[0]
            const data = videoArray[1]

            return {
                id,
                ...data,
            }
        }).filter(video => {
            if (search) {
                return video.title.includes(search)
            } 

            return true
        })
   }
    create(video) {
        const videoId = randomUUID()

        //UUID - UNIVERSAL UNIQUE ID, SEMPRE RETORNA UM ID ÚNICO

        this.#videos.set(videoId, video)
    }

    update(id, video) {
         this.#videos.set(id, video)
    }

    delete(id) {
        this.#videos.delete(id)
   }
}    
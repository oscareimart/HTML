import {defineStore} from "pinia"
import {db} from "../firebase"

import{ collection,
        addDoc,
        getDocs,
        deleteDoc,
        doc,
} from "firebase/firestore";

export const useGymStore = defineStore("gym", {
        state: () => ({
            trainings: [],
            diets: [],
        }),
        actions: {
            async loadTrainings () {
                const snap = await getDocs(collection(db, "trainings"));
                this.trainings = snap.docs.map((d) => ({
                    id: d.id,
                    ...d.data(),
            }));        
        },
        
        async addTraining(training){
            await addDoc(collection(db,"trainings"), training);
            this.loadTrainings();
        },
        async deleteTraining(id){
            await deleteDoc(doc(db, "trainings", id));
            this.loadTrainings();
        },
    }
});
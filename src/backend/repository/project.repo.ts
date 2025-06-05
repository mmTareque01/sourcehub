// import {
//   DocumentData,
//   getDocs,
//   limit,
//   orderBy,
//   query,
//   QueryDocumentSnapshot,
//   startAfter,getDoc,doc,collection
// } from "firebase/firestore";
// import { Projects } from "../model/project.model";
// import { ProjectType } from "@/types/project";
// import { db } from "@/libs/firebase";


// interface GetProjectsParams {
//   pageSize: number;
//   startAfterDoc?: QueryDocumentSnapshot<DocumentData>; // cursor doc for pagination
// }


// export async function getProjects_x({
//   pageSize,
//   cursor,
// }: {
//   pageSize: number;
//   cursor?: string;
// }) {
//   let q = query(collection(db, "projects"), orderBy("createdAt"), limit(pageSize));

//   if (cursor) {
//     const snap = await getDoc(doc(db, "projects", cursor));
//     if (snap.exists()) {
//       q = query(
//         collection(db, "projects"),
//         orderBy("createdAt"),
//         startAfter(snap),
//         limit(pageSize)
//       );
//     }
//   }

//   const snap = await getDocs(q);
//   const data = snap.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data(),
//   }));

//   const lastVisible = snap.docs[snap.docs.length - 1];
//   return { data, lastVisible };
// }


// export async function getProjects_xe({
//   pageSize,
//   startAfterDoc,
// }: GetProjectsParams) {
//   try {
//     // Build base query with ordering (required for cursor-based pagination)
//     let q = query(Projects, orderBy("createdAt"), limit(pageSize));

//     if (startAfterDoc) {
//       q = query(
//         Projects,
//         orderBy("createdAt"),
//         startAfter(startAfterDoc),
//         limit(pageSize)
//       );
//     }

//     const res = await getDocs(q);

//     const data = res.docs.map((doc) => ({
//       id: doc.id,
//       ...(doc.data() as ProjectType),
//     }));

//     // Return both the data and the last doc as the cursor for next page
//     const lastVisible = res.docs[res.docs.length - 1];

//     return {
//       data,
//       lastVisible, // pass this back to fetch next page
//     };
//   } catch (error) {
//     console.error("Error fetching projects:", error);
//     throw error;
//   }
// }

// // ...existing imports...

// export async function getProjects({
//   pageSize,
//   lastVisibleId
// }: {
//   pageSize: number,
//   lastVisibleId?: string
// }) {
//   try {
//     let q = query(
//       collection(db, "projects"), 
//       orderBy("createdAt"), 
//       limit(pageSize)
//     );

//     if (lastVisibleId) {
//       const lastDoc = await getDoc(doc(db, "projects", lastVisibleId));
//       if (lastDoc.exists()) {
//         q = query(
//           collection(db, "projects"),
//           orderBy("createdAt"),
//           startAfter(lastDoc),
//           limit(pageSize)
//         );
//       }
//     }

//     const res = await getDocs(q);
//     const data = res.docs.map((doc) => ({
//       id: doc.id,
//       ...(doc.data() as ProjectType),
//     }));

//     return {
//       data,
//       lastVisibleId: data.length ? data[data.length - 1].id : null,
//       hasMore: data.length === pageSize
//     };
//   } catch (error) {
//     console.error("Error fetching projects:", error);
//     throw error;
//   }
// }

















// // export const getOneCustomer = () => {
// //     return (
// //         getDocs(
// //             query(
// //                 Customers,
// //                 // where("conversation_id", "==", conversation),
// //                 // orderBy("time_stamp", "desc"),
// //                 // startAfter(skip),
// //                 // limit(size)
// //             )
// //         )
// //     )
// // }

// // ==============={ Add New Customer }===============//
// // export const addNewCustomer = (data)=>{
// //     return addDoc(Customers, data)
// // }

// // //==============={ Update Customer }===============//
// // export const updateCustomer = (id, data)=>{
// //     return setDoc(CustomersRef(id), data, { merge: true });
// // }

// //==============={ Delete Customer }===============//
// // export const deleteCustomer = (id)=>{
// //     return deleteDoc(CustomersRef(id));
// // }

import { db } from '../config/db'
import { Task } from '../models/Task'
import admin from 'firebase-admin'
import { handleHttpSuccess } from '../util/handleHttp'

const collectionName = 'tasks'

const search = async (search: any) => {
  const results: any[] = []

  if (search) {
    const resultTitle = await db.collection(collectionName)
      .where('title', '>=', search)
      .where('title', '<=', search + '\uf8ff')
      .get()

    resultTitle.forEach((doc) => {
      results.push({ id: doc.id, ...doc.data() })
    })

    const resultDescription = await db.collection(collectionName)
      .where('description', '>=', search)
      .where('description', '<=', search + '\uf8ff')
      .get()

    resultDescription.forEach((doc) => {
      results.push({ id: doc.id, ...doc.data() })
    })
  } else {
    const result = await db.collection(collectionName).get()

    result.forEach((doc) => {
      results.push({
        id: doc.id,
        title: doc.data().title,
        description: doc.data().description,
        status: doc.data().status,
        creation: doc.createTime.toDate()
      })
    })
  }

  return results
}

const post = async (entity: Task): Promise<any> => {
  const task = db.collection(collectionName).doc()

  const taskToSave = {
    title: entity.title,
    description: entity.description,
    status: false,
    creation: admin.firestore.Timestamp.now()
  }

  await task.set(taskToSave)
  return handleHttpSuccess()
}

const put = async (id: string, entity: Task): Promise<any> => {
  const doc: any = db.collection(collectionName).doc(id)
  const task = await doc.get()

  if (!task.exists) throw new Error('Documento no existe')

  const taskToSave: Task = await task.data()

  taskToSave.title = entity.title
  taskToSave.description = entity.description
  taskToSave.status = entity.status
  taskToSave.creation = admin.firestore.Timestamp.now()

  await doc.update(taskToSave)

  return handleHttpSuccess(taskToSave)
}

const deleteItem = async (id: string): Promise<any> => {
  const doc: any = await db.collection(collectionName).doc(id)
  await doc.delete()

  return handleHttpSuccess()
}

export { search, post, put, deleteItem }

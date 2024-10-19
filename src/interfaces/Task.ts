export interface Task {
  id?: string
  title: string
  description: string
  status: boolean
  userId: string
  creation: FirebaseFirestore.Timestamp
}

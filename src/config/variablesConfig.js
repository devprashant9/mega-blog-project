const variablesConfig = {
  appWriteURL: String(import.meta.env.VITE_APPWRITE_URL),
  appWriteProjectId: String(import.meta.VITE_APPWRITE_PROJECT_ID),
  appWriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appWriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appWriteBuckedId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default variablesConfig;

using Google.Cloud.Firestore;

namespace Firestore.Services
{
    public class FirestoreService
    {
        private readonly FirestoreDb _db; 
        // readonly to restrict access from writing INSERT,UPDATE or DELETE query(s)

        public FirestoreService()
        {
            // Set the path to the Firebase Admin SDK
            string jsonPath = @"E:\firebase_google_creds\mental-healthapp-firebase-firebase-adminsdk-fbsvc-f1b5e268fa.json";
            Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", jsonPath);

            // Create a connection to the Firestore database
            string projectId = "mental-health-blogapp";
            _db = FirestoreDb.Create(projectId);
            Console.WriteLine("Connected to Firestore!!! ◡̈");
        }

        public async Task<List<Dictionary<string, object>>> GetPostsAsync(string collectionName)
        {
            // Get a reference to the collection
            CollectionReference collectionRef = _db.Collection(collectionName);
            // Get the documents in the collection
            QuerySnapshot querySnapshot = await collectionRef.GetSnapshotAsync();

            // Retrieve documents as a List<Dictionary<string, object>> | Then return them
            List<Dictionary<string, object>> documents = new();
            foreach (DocumentSnapshot doc in querySnapshot.Documents)
            {
                documents.Add(doc.ToDictionary());
            }

            return documents;
        }
    }
}
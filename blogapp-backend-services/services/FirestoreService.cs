using Google.Apis.Auth.OAuth2;
using Google.Cloud.Firestore;


namespace Firestore.Services
{
    public class FirestoreService
    {
        private readonly FirestoreDb _db; 
        // readonly to restrict access from writing INSERT,UPDATE or DELETE query(s)

        public FirestoreService()
        {

            // var credential = GoogleCredential.FromFile("path/to/service-account.json");
            // FirebaseApp.Create(new AppOptions { Credential = credential });

            // Set the path to the Firebase Admin SDK
            //var credential = GoogleCredential.FromFile("../../mental-healthapp-firebase-firebase-adminsdk-fbsvc-f1b5e268fa.json");
            string jsonPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "..", "..", "mental-healthapp-firebase-firebase-adminsdk-fbsvc-f1b5e268fa.json");
            jsonPath = Path.GetFullPath(jsonPath);
            if (!File.Exists(jsonPath))
            {
                throw new FileNotFoundException("Firebase Admin SDK JSON file not found.", jsonPath);
            }
            Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", jsonPath);

            // Create a connection to the Firestore database
            string projectId = "mental-healthapp-firebase";
            _db = FirestoreDb.Create(projectId);
            Console.WriteLine("Connected to Firestore!!! ◡̈");
        }

        public FirestoreService(IConfiguration configuration)
        {
            string jsonPath = configuration["GoogleCloud:CredentialsPath"];
            Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", jsonPath);

            string projectId = configuration["GoogleCloud:ProjectId"];
            _db = FirestoreDb.Create(projectId);
            Console.WriteLine("Connected to Firestore!!! ◡̈");
        }

        public async Task<List<Dictionary<string, object>>> GetPostsAsync(string collectionName)
        {
            try
            {
                CollectionReference collectionRef = _db.Collection(collectionName);
                QuerySnapshot querySnapshot = await collectionRef.GetSnapshotAsync();

                List<Dictionary<string, object>> documents = new();
                foreach (DocumentSnapshot doc in querySnapshot.Documents)
                {
                    documents.Add(doc.ToDictionary());
                }

                return documents;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Error fetching documents from Firestore: {ex.Message}");
                throw; // Re-throw the exception to let the controller handle it
            }
        }
    }
}
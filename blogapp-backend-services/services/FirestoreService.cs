using Google.Apis.Auth.OAuth2;
using Google.Cloud.Firestore;
using Microsoft.AspNetCore.Mvc;


namespace Firestore.Services
{
    public class FirestoreService
    {
        private readonly FirestoreDb _db; 
        // readonly to restrict access from writing INSERT,UPDATE or DELETE query(s)

        public FirestoreService()
        {
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
            #pragma warning disable CS8600 // Converting null literal or possible null value to non-nullable type.
            string jsonPath = configuration["GoogleCloud:CredentialsPath"];
            #pragma warning restore CS8600 // Converting null literal or possible null value to non-nullable type.
            Environment.SetEnvironmentVariable("GOOGLE_APPLICATION_CREDENTIALS", jsonPath);

            #pragma warning disable CS8600 // Converting null literal or possible null value to non-nullable type.
            string projectId = configuration["GoogleCloud:ProjectId"];
            #pragma warning restore CS8600 // Converting null literal or possible null value to non-nullable type.
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

        public async Task<String> GetNickNameAsync(string userId)
        {
            try
            {
                CollectionReference collectionRef = _db.Collection("nicknames");
                QuerySnapshot querySnapshot = await collectionRef.GetSnapshotAsync();
                
                foreach (DocumentSnapshot doc in querySnapshot.Documents)
                {
                    if(doc.Id == userId)
                    {
                        return doc.GetValue<string>("nickName");
                    }
                }
                return "No nickname found for the given userId.";
            }

            catch(Exception ex)
            {
                return "BadRequestResult - Error fetching nickname: " + ex.Message;
            }
        }

        public async Task<ActionResult<string>> SaveProfileAsync(string userId, string nickName)
        {
            try
            {
                // Create a new document with the specified userId
                CollectionReference collectionRef = _db.Collection("nicknames");
                
                // Add document with userId as the document ID
                await collectionRef.Document(userId).SetAsync(new { nickName = nickName });
                return new OkObjectResult("Profile data saved successfully.");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Issue with saving profileData to Firestore: " + ex.Message);
                return new BadRequestObjectResult("Error saving profile data: " + ex.Message);
            }
        }
    }
}
import FirebaseFirestore
import MessageUI
import FirebaseFirestoreSwift
import FirebaseAuth
import Foundation

// PostList for the list of items that are displayed
class PostListViewViewModel: ObservableObject {
    @Published var showingAddPostViewModel = false
    @Published var showErrorInSendMessage = false
    @Published var showMailView = false
    @Published var allJobs: [Job] = []
    
    init() {
        fetchJobs()
    }
    
    func fetchJobs() {
        let db = Firestore.firestore()
        db.collection("jobs").getDocuments { snapshot, error in
            if let error = error {
                print("Error fetching jobs: \(error.localizedDescription)")
                return
            }
            
            guard let documents = snapshot?.documents else {
                print("No jobs found")
                return
            }
            
            self.allJobs = documents.compactMap { document in
                try? document.data(as: Job.self)
            }
        }
    }
    
    /**
     Jobs are required to be published. Unpublished jobs are jobs that are missing key details such as email address or phone number.
     Jobs that are not published but created by the selected user is also displayed so that they can modify the job and make it publishable.
     */
    var sortedJobs: [Job] {
        let creator = Auth.auth().currentUser?.uid ?? ""
        let publishedJobs = allJobs.filter { $0.isPublished }
        let unpublishedJobs = allJobs.filter { !$0.isPublished }
        let unpublishedJobsCreatedByUser = unpublishedJobs.filter { $0.creator_id == creator }
        return publishedJobs + unpublishedJobsCreatedByUser
    }
    
    /**
     Delete a select job. Only creators can delete the job
     */
    func delete(id: String) {
        let db = Firestore.firestore()
        db.collection("jobs").document(id).delete { error in
            if let error = error {
                print("Error deleting job: \(error.localizedDescription)")
                return
            }
            self.allJobs.removeAll { $0.id == id }
        }
    }
    
    /**
     Check to ensure that the user can send mail
     */
    func canSendMail() -> Bool {
        return MFMailComposeViewController.canSendMail()
    }
    
    /**
     Only send email if the user has the ability to send email
     */
    func sendEmail(title: String, to recipient: String) {
        let subject = title.addingPercentEncoding(withAllowedCharacters: .urlQueryAllowed) ?? ""
        let body = "I am interested in the job you posted.".addingPercentEncoding(withAllowedCharacters: .urlQueryAllowed) ?? ""
        let email = "mailto:\(recipient)?subject=\(subject)&body=\(body)"
        
        print("Constructed Email URL: \(email)") // Debugging: Print the constructed email URL
        
        if let url = URL(string: email) {
            if UIApplication.shared.canOpenURL(url) {
                UIApplication.shared.open(url, options: [:], completionHandler: nil)
            } else {
                print("Can't open mail app")
                showErrorInSendMessage = true
            }
        } else {
            print("Invalid email URL")
            showErrorInSendMessage = true
        }
    }
}

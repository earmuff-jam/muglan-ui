//
//  PostListViewViewModel.swift
//  muglan
//
//  Created by Mohit Paudyal on 5/17/24.
//

import FirebaseFirestore
import Foundation

// PostList for the list of items that are displayed
class PostListViewViewModel: ObservableObject {
    
    @Published var showingAddPostViewModel = false
   
    
    init () {}
    
    
    func delete(id: String) {
        let db = Firestore.firestore()
        
        db.collection("jobs")
            .document(id)
            .delete()
    }
}

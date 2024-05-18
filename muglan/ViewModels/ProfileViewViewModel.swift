//
//  ProfileViewViewModel.swift
//  muglan
//
//  Created by Mohit Paudyal on 5/17/24.
//

import Foundation
import FirebaseAuth
import FirebaseFirestore


class ProfileViewViewModel: ObservableObject {

    @Published var user: User? = nil
    
    init () {}
    
    func logout() {
        do {
            try Auth.auth().signOut()
        } catch {
            
        }
    }
    
    func fetchUser() {
        guard let userID = Auth.auth().currentUser?.uid else {
            return
        }
        let db = Firestore.firestore()
        db.collection("users").document(userID).getDocument { [weak self] snapshot, error in
            guard let data = snapshot?.data(), error == nil else {
                return
            }
            
            DispatchQueue.main.async {
                self?.user = User (ID: data["id"] as? String ?? "",
                                   firstname: data["firstname"] as? String ?? "",
                                   lastname: data["lastname"] as? String ?? "",
                                   email: data["email"] as? String ?? "",
                                   joined: data["joined"] as? TimeInterval ?? 0)
            }
        }
    }
    
}

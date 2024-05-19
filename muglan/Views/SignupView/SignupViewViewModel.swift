//
//  SignupViewViewModel.swift
//  muglan
//
//  Created by Mohit Paudyal on 5/17/24.
//

import Foundation
import FirebaseAuth
import FirebaseFirestore

class SignupViewViewModel: ObservableObject {
    
    @Published var username = ""
    @Published var email_address_text = ""
    @Published var firstname = ""
    @Published var lastname = ""
    @Published var password = ""
    @Published var errorMessage = ""
    
    init() {}
    
    func register() {
        guard validate() else {
            return
        }
        
        // [weak self] ensures a prevention of memory leak
        Auth.auth().createUser(withEmail: email_address_text, password: password, completion: { [weak self] result, error in
            
            guard let userID = result?.user.uid else {
                return
            }
            self?.insertUserRecord(id: userID)
            
        })
    }
    
    
    private func insertUserRecord(id: String) {
        let newUser = User(ID: id, firstname: firstname, lastname: lastname, email: email_address_text, joined: Date().timeIntervalSince1970)
        
        let db = Firestore.firestore()
        db.collection("users")
            .document(id)
            .setData(newUser.asDictionary())
    }
    
    
    
    private func validate() -> Bool {
        errorMessage = ""
        guard !email_address_text.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty,
              !password.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty,
              !username.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty,
              !firstname.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty,
              !lastname.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty
        else {
            errorMessage = "Fill in all fields"
            return false
        }
        
        guard email_address_text.contains("@") && email_address_text.contains(".") else {
            errorMessage = "Invalid email address"
            return false
        }
        guard password.count > 6 else {
            errorMessage = "Password length is too short. Try again."
            return false
        }
        
        return true
    }
}

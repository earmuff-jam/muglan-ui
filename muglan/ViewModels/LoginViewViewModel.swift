//
//  LoginViewViewModel.swift
//  muglan
//
//  Created by Mohit Paudyal on 5/17/24.
//

import Foundation
import FirebaseAuth

class LoginViewViewModel: ObservableObject {
    
    @Published var email_address_text = ""
    @Published var password = ""
    @Published var errorMessage = ""
    
    init() {
        
    }
    
    // login the user
    func login() {
        guard validate() else {
            return
        }
        
        // if the user is validated try to log the user in
        Auth.auth().signIn(withEmail: email_address_text, password: password)
    }
    
   // validate the user input for login form
    private func validate() -> Bool {
        errorMessage = ""
    guard !email_address_text.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty,
          !password.trimmingCharacters(in: .whitespacesAndNewlines).isEmpty else {
        errorMessage = "Fill in all fields"
            return false
    }
    
    guard email_address_text.contains("@") && email_address_text.contains(".") else {
        errorMessage = "Invalid email address"
            return false
    }
        return true
    }
}

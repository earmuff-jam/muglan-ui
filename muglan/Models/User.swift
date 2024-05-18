//
//  User.swift
//  muglan
//
//  Created by Mohit Paudyal on 5/17/24.
//

import Foundation

/**
 User struct that represents the logged in user after authentication is passed through with Firebase auth
 */
struct User: Codable {
    let ID: String
    let firstname: String
    let lastname: String
    let email: String
    let joined: TimeInterval
}

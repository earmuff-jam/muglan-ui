//
//  Post.swift
//  muglan
//
//  Created by Mohit Paudyal on 5/17/24.
//

import Foundation

struct Job: Codable, Identifiable {
    let id: String
    let title: String
    let description: String
    let street_address: String
    let city: String
    let state: String
    let employment_type: String
    let working_schedule: String
    let salary_rate: String
    let salary_is_negotiable: Bool
    let salary_is_hourly: Bool
    let zipCode: String
    let creator_id: String?
    let creator_email_address: String
    let creator_phone_number: String
    let dueDate: TimeInterval
    let createdDate: TimeInterval
    var isPublished: Bool
 
    
    mutating func setPublish(_ state: Bool) {
        isPublished = true
    }
    
}


//
//  JobDetailsViewViewModel.swift
//  muglan
//
//  Created by Mohit Paudyal on 5/17/24.
//

import Foundation


class JobDetailsViewViewModel: ObservableObject {
    @Published var title = ""
    @Published var description = ""
    
    @Published var street_address = ""
    @Published var city = ""
    @Published var state = ""
    @Published var zipcode = ""
    
    @Published var employment_type = ""
    @Published var working_schedule = ""
    
    @Published var salary_rate = ""
    @Published var salary_is_negotiable = ""
    @Published var salary_is_hourly = ""
    
    @Published var contact_email_address = ""
    @Published var contact_phone_number = ""
    
    @Published var dueDate = Date()
    @Published var errorMessage = ""
    @Published var showAlert = false

    init () {}
}

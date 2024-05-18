//
//  muglanApp.swift
//  muglan
//
//  Inital App
//  Created by Mohit Paudyal on 5/17/24.
//

import FirebaseCore
import SwiftUI

@main
struct muglanApp: App {
    init() {
        FirebaseApp.configure()
    }
    var body: some Scene {
        WindowGroup {
            MainView()
        }
    }
}

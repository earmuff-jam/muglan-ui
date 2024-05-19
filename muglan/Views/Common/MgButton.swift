//
//  MgButton.swift
//  muglan
//
//  Created by Mohit Paudyal on 5/17/24.
//

import SwiftUI

struct MgButton: View {
    
    let title: String
    let backgroundColor: Color
    let action: () -> Void
    
    
    var body: some View {
        Button {
            // action
            action()
        } label: {
            ZStack {
                RoundedRectangle(cornerRadius: 10)
                    .foregroundColor(backgroundColor)
                
                Text(title)
                    .bold()
                    .foregroundColor(Color.white)
                
            }
        }
    }
}

#Preview {
    MgButton(title: "title", backgroundColor: Color.pink) {}
}

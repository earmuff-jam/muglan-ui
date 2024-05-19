//
//  LoginHeaderView.swift
//  muglan
//
//  Created by Mohit Paudyal on 5/17/24.
//

import SwiftUI

struct HeaderView: View {
    
    let title: String
    let subtitle: String
    let angleOfRotation: Double
    let backgroundColor: Color
    
    var body: some View {
        ZStack {
            RoundedRectangle(cornerRadius: 0)
                .foregroundColor(backgroundColor)
                .rotationEffect(Angle(degrees: angleOfRotation))
            VStack {
                Text(title)
                    .font(.system(size: 50))
                    .foregroundColor(Color.white)
                Text(subtitle)
                    .font(.system(size: 20))
                    .foregroundColor(Color.white)
            }
        }
        .frame(width: UIScreen.main.bounds.width * 3, height: 300)
    }
}

#Preview {
    HeaderView(title: "Title", subtitle: "Subtitle", angleOfRotation: 15, backgroundColor: .blue)
}

//
//  Extensions.swift
//  muglan
//
//  Created by Mohit Paudyal on 5/17/24.
//

import Foundation

/**
 Extension encodable allows users to encode Codable as a dictionary of key value pair. If error is caught, return empty dictionary
 */
extension Encodable {
    func asDictionary() -> [String : Any] {
        guard let data = try? JSONEncoder().encode(self) else {
            return [:]
        }
        
        do {
            let json = try JSONSerialization.jsonObject(with: data) as? [String: Any]
            return json ?? [:]
        } catch {
            return [:]
        }
    }
}

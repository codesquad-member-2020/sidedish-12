//
//  BanchanDataSource.swift
//  Banchan
//
//  Created by Chaewan Park on 2020/04/21.
//  Copyright © 2020 Chaewan Park. All rights reserved.
//

import UIKit

class BanchanDataSource: NSObject {
    
}

extension BanchanDataSource: UITableViewDataSource {
    func numberOfSections(in tableView: UITableView) -> Int {
        return 2
    }
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return 3
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        guard let cell = tableView.dequeueReusableCell(withIdentifier: BanchanCell.reuseIdentifier, for: indexPath) as? BanchanCell else { return UITableViewCell() }
        cell.badgeStackView.addArrangedSubview(EventBadge())
        cell.badgeStackView.addArrangedSubview(LaunchingBadge())
        cell.badgeStackView.addArrangedSubview(OutOfStockBadge())
        cell.badgeStackView.addArrangedSubview(FreeGiftBadge())
        return cell
    }
}
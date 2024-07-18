package com.example.mockproject_052024_group2.pks;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.util.Objects;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BidHistoryId implements Serializable {
    private long user;
    private long auction;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof BidHistoryId that)) return false;
        return getUser() == that.getUser() && getAuction() == that.getAuction();
    }

    @Override
    public int hashCode() {
        return Objects.hash(getUser(), getAuction());
    }
}

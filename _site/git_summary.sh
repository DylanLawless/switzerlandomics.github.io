#!/usr/bin/env bash

days_in_month() {
  local year=$1
  local month=$2

  case "$month" in
    1|3|5|7|8|10|12) echo 31 ;;
    4|6|9|11) echo 30 ;;
    2)
      if (( (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 )); then
        echo 29
      else
        echo 28
      fi
      ;;
  esac
}

format_age_since_first_commit() {
  local first_date today
  local fy fm fd ty tm td
  local years months days
  local prev_month prev_year first_ts today_ts total_days

  first_date=$(git log --reverse --format=%ad --date=short | head -1)
  today=$(date +%Y-%m-%d)

  IFS=- read -r fy fm fd <<< "$first_date"
  IFS=- read -r ty tm td <<< "$today"

  fy=$((10#$fy)); fm=$((10#$fm)); fd=$((10#$fd))
  ty=$((10#$ty)); tm=$((10#$tm)); td=$((10#$td))

  years=$((ty - fy))
  months=$((tm - fm))
  days=$((td - fd))

  if (( days < 0 )); then
    months=$((months - 1))
    prev_month=$((tm - 1))
    prev_year=$ty

    if (( prev_month == 0 )); then
      prev_month=12
      prev_year=$((ty - 1))
    fi

    days=$((days + $(days_in_month "$prev_year" "$prev_month")))
  fi

  if (( months < 0 )); then
    years=$((years - 1))
    months=$((months + 12))
  fi

  first_ts=$(git log --reverse --format=%ct | head -1)
  today_ts=$(date +%s)
  total_days=$(( (today_ts - first_ts) / 86400 ))

  echo "${years} years, ${months} months, ${days} days (${total_days} total days)"
}

echo "Git project summary"
echo "==================="

echo
echo "First commit:"
git log --reverse --format="%ad  %h  %s" --date=short | head -1

echo
echo "Project age since first commit:"
format_age_since_first_commit

echo
echo "Total commits across all branches:"
git rev-list --count --all

echo
echo "Active commit days:"
git log --format=%ad --date=short | sort -u | wc -l | tr -d ' '

echo
echo "Commits by day:"
git log --format=%ad --date=short | sort | uniq -c

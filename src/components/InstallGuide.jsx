              </p>

              {/* Arrow on desktop */}
              {i < steps.length - 1 && (
                <span className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2 text-brand-300 text-2xl">
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Warning callout */}
        <div className="mt-10 mx-auto max-w-2xl reveal">
          <div className="flex items-start gap-3 p-5 rounded-2xl bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800">
            <span className="text-xl shrink-0">⚠</span>
            <p className="text-sm text-amber-800 dark:text-amber-300">
              <span className="font-semibold">Don’t see the install button?</span>{' '}
              Open Settings → Apps → Chrome → Install unknown apps → Allow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
